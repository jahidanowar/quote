import Product from "~/server/models/Product.model";
import Option from "~~/server/models/Option.model";
import Toughbook from "~~/server/models/Toughbook.model";

export default defineEventHandler(async (event) => {
  try {
    // const { id } = event.context.params; // Never extract params like this instead use the following
    const { id } = getRouterParams(event);

    const product = await Product.findOne({ _id: id })
      .populate({
        path: "options",
        model: Option,
      })
      .populate({
        path: "toughbooks",
        model: Toughbook,
      });

    // const product = await Product.aggregate([
    // 	{ $match: { name: 'Toughbook 55' } },
    // 	{
    // 		$group: {
    // 			_id: null,
    // 			data: { $first: '$$ROOT' },
    // 		},
    // 	},
    // 	{
    // 		$lookup: {
    // 			from: 'data.toughbooks',
    // 			localField: 'toughbooks',
    // 			foreignField: '_id',
    // 			as: 'models',
    // 		},
    // 	},
    // ]);

    // console.log(product);

    return product;

    // const product = await Product.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
});

export default async function getExample(_, args, context) {
    const {
      example:{
          DeveloperId,
          name,
          workplace
      }
    } = args;

    return context.example(context,{
        DeveloperId,
        name,
        workplace
    });
};
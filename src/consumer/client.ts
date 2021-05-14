export const processData = async ({ topic, partition, message }: any) => {
    console.log({ message: message.value.toString() });
};

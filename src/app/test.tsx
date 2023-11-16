export default async function DefaultPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Async component</p>;
}

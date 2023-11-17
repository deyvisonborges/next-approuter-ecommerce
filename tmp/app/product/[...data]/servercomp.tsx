export async function ServerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <p>Server component</p>;
}

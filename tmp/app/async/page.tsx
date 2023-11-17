export default async function DefaultPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`https://api.github.com/users/deyvisonborges`);
  const users = await response.json();
  return <p>{JSON.stringify(users)}</p>;
}

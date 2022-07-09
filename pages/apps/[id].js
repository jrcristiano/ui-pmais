import { useRouter } from 'next/router';

export default function show() {
  const router = useRouter();
  return (
    <>
      <h1>Visualizar app id {router.query.id}</h1>
    </>
  );
}
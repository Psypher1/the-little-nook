export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default function Book() {
  return (
    <div>
      <h1 className="text-5xl">Single Book Page</h1>
    </div>
  );
}

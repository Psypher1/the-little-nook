import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Request = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // console.log(da/ta);
    fetch("/api/requestBook", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      <h1 className="text-2xl mb-5 text-center">Request</h1>
      {submitted ? (
        <div className="bg-teal-700 text-teal-100 p-6 text-center rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Request Sent!</h2>
          <p className="italic">
            Check back soon, hopefully we'll have your book
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 max-w-2xl p-4 bg-slate-300 mx-auto"
        >
          <label htmlFor="title">
            <span>Title</span>
            <input
              required
              {...register("title", { required: true })}
              type="text"
              name="title"
              className="w-full"
              placeholder="Book Title"
            />
          </label>

          <label htmlFor="title">
            <span>Author</span>
            <input
              v
              {...register("author", { required: true })}
              type="text"
              name="author"
              className="w-full"
              placeholder="Book Author"
            />
          </label>

          <button
            type="submit"
            className="bg-teal-900 hover:bg-teal-800 text-teal-100 p-4"
          >
            Request
          </button>
        </form>
      )}
    </>
  );
};

export default Request;

import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import * as Yup from "yup";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Contact1 = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // const [tags, setTags] = useState([]);
  // const [tagInput, setTagInput] = useState("");

  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  // const handleInputChange = (e) => {
  //   setTagInput(e.target.value);
  // };

  // const handleInputKeyDown = (e) => {
  //   if (e.key === "Enter" || e.key === ",") {
  //     e.preventDefault();
  //     const newTag = tagInput.trim();
  //     if (newTag) {
  //       setTags([...tags, newTag]);
  //       setTagInput("");
  //     }
  //   }
  // };

  // const handleTagRemove = (index) => {
  //   const newTags = [...tags];
  //   newTags.splice(index, 1);
  //   setTags(newTags);
  // };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag) {
        setFieldValue("tags", [...values.tags, newTag]);
        setFieldValue("tag", "");
      }
    }
  };

  const handleTagRemove = (index) => {
    const newTags = [...values.tags];
    newTags.splice(index, 1);
    setFieldValue("tags", newTags);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    tags: Yup.array()
      .min(1, "At least one tag is required")
      .of(Yup.string().trim().required("Tag cannot be empty")),
    category: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      image: "",
      date: "",
      category: "",
      content: "",
      tags: [],
      author: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  Great! We're excited to hear from you and let's start
                  something special togerter. call us for any inquery.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            {/* <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Don't be afraid man ! "}
                  <br />
                  say hello
                </h3>
                <ul>
                  <li>
                    <a href="tel:+(2)578365379">+(2) 578 - 365 - 379</a>
                  </li>
                  <li>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                  </li>
                  <li>
                    <span>
                      230 Norman Street New York, <br /> QC (USA) H8R 1A1
                    </span>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="contact__form">
                <form onSubmit={handleSubmit} encType="multipart/form-data"> 
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="title"
                        placeholder="Title *"
                        value={values.title}
                        onChange={handleChange}
                      />
                      {touched.title && errors.title ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.title}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="file"
                        name="image"
                        placeholder="Upload Main Image *"
                        onChange={(e) => {
                          setFieldValue("image", e.target.files[0]);
                        }}
                      />
                      {touched.image && errors.image ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.image}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className="row g-3"
                    style={{ marginBottom: "30px", marginTop: "30px" }}
                  >
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        style={{ height: "50px" }}
                        name="category"
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      {touched.category && errors.category ? (
                        <div
                          className="error"
                          style={{ marginTop: "10px", color: "red" }}
                        >
                          {errors.category}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        class="form-control"
                        id="selectedDate"
                        name="date"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        value={values.selectedDate}
                        onChange={handleChange}
                      />
                      {touched.date && errors.date ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.date}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-12">
                      <JoditEditor
                        ref={editor}
                        // value={content}
                        // onChange={(newContent) => {}}
                        value={values.content}
                        onChange={(newContent) => {
                          handleChange({
                            target: {
                              name: 'content',
                              value: newContent,
                            },
                          });
                        }}
                      />
                        {touched.content && errors.content ? (
                        <div className="error">{errors.content}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row g-3" style={{ paddingTop: "30px" }}>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        placeholder="Enter Tags *"
                        value={values.tag}
                        name="tags"
                        onChange={(e) => {
                          setFieldValue("tag", e.target.value);
                        }}
                        onKeyDown={handleInputKeyDown}
                      />

                      <ul style={{ display: "flex", padding: "5px" }}>
                        {values.tags.map((tag, index) => (
                          <li
                            key={index}
                            style={{
                              border: "1px solid black",
                              margin: "5px",
                              borderRadius: "10px",
                              padding: "5px",
                              backgroundColor: "#f1f1f1",
                            }}
                          >
                            {tag}
                            <button onClick={() => handleTagRemove(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 4.646a.5.5 0 0 1 0 .708L9.707 8l1.647 1.646a.5.5 0 1 1-.708.708L9 8.707l-1.646 1.647a.5.5 0 1 1-.708-.708L8.293 8 6.646 6.354a.5.5 0 0 1 .708-.708L9 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                      {touched.tags && errors.tags ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.tags}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="author"
                        value={values.author}
                        onChange={handleChange}
                        placeholder="Written By *"
                      />
                      {touched.author && errors.author ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.author}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button
                          className="wc-btn-primary btn-hover btn-item"
                          type="submit"
                        >
                          <span></span> Post <br />
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;

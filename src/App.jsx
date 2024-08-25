import { useState } from "react";
import "./App.css";
import Gallery from "./components/gallery";
import { Modal } from "antd";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let hits = [
    {
      tags: "flower, yellow flower, flower wallpaper",
      largeImageURL:
        "https://pixabay.com/get/gc489b05844e7d6052a1a37e7cb7bda94fdb1a4a85b85b4edf16f88e4f7adac900bd952b49a5a0414627e5a25e9d98e4bba80156854708509fab236d603f7c9c2_1280.jpg",
    },
    {
      tags: "yellow poppy, flower, yellow flower",

      largeImageURL:
        "https://pixabay.com/get/gd0bfd87e47d9ed7c0dd7b92e17fc30823a12192e3bc67e5d424257c982c55a716c5ee648f719574bca103540afc9f38dc1186d82bac4335bc6e244e57313948d_1280.jpg",
    },
    {
      tags: "flower, rose, garden",

      largeImageURL:
        "https://pixabay.com/get/gf3199fddebe19ddd9cc0466be63d765ef10800ee47855965aa0a563388676569141a636cc7ea82dd869e40e019b035b3b07f63290009da39d1eca1e2751ccea4_1280.jpg",
    },
    {
      tags: "flowers, yellow flowers, plants",

      largeImageURL:
        "https://pixabay.com/get/g21b0cdd8759fa00d3dc359b5391ec65d375d1e4c9d0772b8bfd3348a56599734ccb85df759db3ccd94660a2bc00398d33ceec45793c6601b708720a994f912cc_1280.jpg",
    },
    {
      tags: "flowers, yellow flowers, nature",

      largeImageURL:
        "https://pixabay.com/get/gf937b656765dcf69e108c5be1fdf7111b3d62203b68e59c01b7a87bdc3e5b2e549090af7e63da0ff7faaed6fbc76854b74338d406fcae3c141b619e1f96c9ef8_1280.jpg",
    },
    {
      tags: "flower, yellow petals, yellow flower",

      largeImageURL:
        "https://pixabay.com/get/gfed993b94a33e262c35e45a067858197bea7aa2e8f652b20dd57501341e5ef93504ac2f5061eec29a58f34179e7b5a34b9b65f5530adcf6ec67895b240eabbc9_1280.jpg",
    },
    {
      tags: "flower, yellow flower, petals",

      largeImageURL:
        "https://pixabay.com/get/g6834c270799b70a4ddd749698562c924747ba3742ebc89020e520fa582990b08945ab1f77a77946c51f5bc482f52a4f2790d898f7d6f44c382c1ccbcdc76914c_1280.jpg",
    },
    {
      tags: "flower, ranunculus, petals",
      largeImageURL:
        "https://pixabay.com/get/geb29a4120b820cf9a8f1fc424b00dacae79e7a0e84951f93492301af3f623a6ac65adfd7dc2b43d94e19b2480fbe9e1277b648a86147761c1dcd8979eee51710_1280.jpg",
    },
    {
      tags: "yellow rose, rose, flower",
      largeImageURL:
        "https://pixabay.com/get/g6d2a3264a1f728a6f495d1d63f748129809bcfe7eb5bd8cec8a51b0c7050f8e7bfff2f2d1d2d799200109640a74e25740072c4207b73dab27915fefab22dacfb_1280.jpg",
    },
    {
      tags: "flowers, coast, sea",
      largeImageURL:
        "https://pixabay.com/get/g735ac717bbe935b433253ba3c3d204ca7d65966f5a50f1f6b39fb95e0ce6387da565469d9b11ebf8d0913719eb74ab13543c64ee601bef48d25016a33841ced2_1280.jpg",
    },

    {
      tags: "flowers, yellow, spring",
      largeImageURL:
        "https://pixabay.com/get/ga6d80ad3fc31b648eab61c6cc02710ae84663ca3617fd141f0df9ef7cf61ab346329086603b94eb0cee31a1fcedba05a49274b39fd792cd7c035f73395dfa6d8_1280.jpg",
    },
    {
      tags: "drip, flower background, yellow",
      largeImageURL:
        "https://pixabay.com/get/g525a2334101b0b914700e9aeaa42f46ec744c2962380cda61278b3d274540b03cbbc486ed56d481788f48bd07783dc870e5d2fd3cb6f46372f31f40573c3277f_1280.jpg",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="main flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Image Gallery by Noman
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A gallery is a curated space, either artworks, photographs, or
              other visual pieces are displayed for public viewing. It serves as
              a platform for artists to showcase their creations, allowing
              audiences to appreciate, critique, and sometimes purchase the
              works. Galleries often host exhibitions, highlighting specific
              themes, artists, or collections, and play a crucial role in the
              art world by promoting cultural exchange and artistic expression.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 cardRow">
            {hits.map((val, ind) => {
              return (
                <Gallery
                  key={ind}
                  img={val.largeImageURL}
                  title={val.tags}
                  onClick={() => showModal(val)}
                />
              );
            })}
          </div>
          <Modal
            className="modalDiv"
            title="Image Details"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <img src={modalContent.largeImageURL} alt={modalContent.tags} />
            <p>{modalContent.tags}</p>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default App;

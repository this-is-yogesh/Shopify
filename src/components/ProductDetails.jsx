import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { encode as btoa } from "base-64";
import { Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [i, setId] = useState();

  const getData = async () => {
    try {
      await fetch(`http://localhost:3000/product/${params.id}`);
      setId(params.id);
    } catch (err) {
      console.log(err, "this is error");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        var headers = new Headers();
        headers.append(
          "Authorization",
          "Basic " +
            btoa(
              "0606ded7fe76f5359b6c3aa895095394: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"
            )
        );
        const result = await fetch("http://localhost:5000/products.json", {
          headers: headers,
        });
        const resp = await result.json();
        setData(resp.products);
        setLoading(false);
      } catch (err) {
        console.log(err, "this is error");
        setLoading(false);
        setId(params.id);
      }
    };
    getData();
    fetchdata();
  }, []);

  const updateditem = data.filter((d) => {
    return d.id == i;
  });

  return (
    <>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {updateditem.map((d, index) => (
              <>
                <VStack>
                  <Heading key={d.id}> "{d.title}"</Heading>
                  <Text
                    dangerouslySetInnerHTML={{ __html: d.body_html }}
                  ></Text>
                  <Image
                    src={d.image?.src}
                    alt="not found"
                    style={{ width: "30vh", height: "50%" }}
                  />
                </VStack>
              </>
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;

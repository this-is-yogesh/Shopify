import React, { useEffect } from "react";
import { encode as btoa } from "base-64";
import { useState } from "react";
import "../App.css";
import {
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

//this is the commit 

const Kirtans = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



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
      }
    };
    fetchdata();
  }, []);

  const updateditem = data.filter((d) => {
    return (
      d.product_type.toLowerCase().includes("kirtan") ||
      d.title.toLowerCase().includes("kirtan")
    );
  });

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {updateditem.map((d, index) => (
            <>
              <Link to={`/product/${d.id}`}>
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
                <Button> Details</Button>
              </Link>
            </>
          ))}
        </>
      )}
    </Container>
  );
};

export default Kirtans;

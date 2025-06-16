import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { Link } from 'react-router-dom';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RapportStyled } from "./Rapport.Styled";

export const Rapport = () => {
    const { rapportID } = useParams();
    const [rapportData, setRapport] = useState([]);
  
    useEffect(() => {
      contentfulClient
        .getEntries({
          content_type: "rapport",
          "sys.id": rapportID,
          select: "fields"
        })
        .then((data) => {
          console.log('Fetched Data:', data);
          setRapport(data.items);
        })
        .catch((err) => console.log(err));
    }, [rapportID]);
  
    return (
      <RapportStyled>
        {rapportData.length > 0 ? (
          rapportData.map((item) => (
              <figure key={item.sys.id}>
                {item.fields.image?.fields?.file?.url && (
                  <img src={`https:${item.fields.image.fields.file.url}`} alt="Contentful Image" />
                )}
                <Link to={`/rapport/${item.sys.id}`} key={item.sys.id}>
                  <h3>{item.fields.title}</h3>
                </Link>
                <p>D. {`${item.fields.date} af ${item.fields.author.fields.name}`}</p>
                <p className="category">{item.fields.category}</p>
              </figure>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </RapportStyled>
    );
  };

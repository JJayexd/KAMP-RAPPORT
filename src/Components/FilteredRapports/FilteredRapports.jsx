import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { RapportStyled } from "../Rapport/Rapport.Styled";

export const FilteredRapports = () => {
  const { category } = useParams();
  const [rapports, setRapports] = useState([]);

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: "rapport",
        "fields.category[match]": category,
        select: "fields"
      })
      .then((data) => {
        setRapports(data.items);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <RapportStyled>
      {rapports.length > 0 ? (
        rapports.map((item) => (
          <figure key={item.sys.id}>
            {item.fields.image?.fields?.file?.url && (
              <img src={`https:${item.fields.image.fields.file.url}`} alt="Contentful Image" />
            )}
            <Link to={`/rapport/${item.sys.id}`}>
              <h3>{item.fields.title}</h3>
            </Link>
            <p className="text-grey">{`${item.fields.date} af ${item.fields.author.fields.name}`}</p>
            <p className="category">{item.fields.category}</p>
          </figure>
        ))
      ) : (
        <p>Ingen..</p>
      )}
    </RapportStyled>
  );
};

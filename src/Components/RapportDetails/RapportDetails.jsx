import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { RapportDetailsStyled } from './RapportDetails.Styled';
import { RenderRichText } from "./RenderRichText.jsx";

export const RapportDetails = () => {
    const { rapportID } = useParams();
    const [rapport, setRapport] = useState(null);

    useEffect(() => {
      contentfulClient
        .getEntries({
          content_type: "rapport",
          "sys.id": rapportID,
          select: "fields"
        })
        .then((data) => {
          console.log('Fetched Data:', data);
          setRapport(data.items[0]);
        })
        .catch((err) => console.log(err));
    }, [rapportID]);
    
    if (!rapport) return <p>Loading...</p>;
    
    const { title, date, author, image, content } = rapport.fields;
    const imageUrl = image?.fields?.file?.url;
    const authorName = author?.fields?.name ?? "Ukendt forfatter";
    
    return (
      <RapportDetailsStyled>
        <article>
          <h3>{title}</h3>
          <p>D. {`${date} af ${authorName}`}</p>
          {imageUrl && <img src={`https:${imageUrl}`} alt="Contentful Image" />}
          <RenderRichText document={content} />
        </article>
      </RapportDetailsStyled>
    );
    
}
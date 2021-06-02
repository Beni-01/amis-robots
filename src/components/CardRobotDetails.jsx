export const CardRobotDetails = ({ item, cardClass, handleHideDetails }) => {
  const {
    name,
    email,
    phone,
    id,
    website,
    address: { city, suite, street, zipcode },
    company: { bs, catchPhrase, name: company_name },
  } = item[0];

  const handleClickClose = () => {
    handleHideDetails();
  };
  return (
    <div className="col-md-10 col-11 my-3 p-5 margin-left  card  ">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://robohash.org/${id}`}
            className={cardClass}
            alt={name}
          />
        </div>
        <div className="col-md-7 ">
          <h2 className="text-underline">Identité</h2>
          <div className="mt-4 font-s">
            <p>
              <b>NOMS :</b> <span>{name}</span>
            </p>
            <p>
              <b>TEL :</b> <span className="">{phone}</span>
            </p>
            <p>
              <b>E-mail :</b> <span className="">{email}</span>
            </p>
            <p>
              <b>website :</b> <span className="">{website}</span>
            </p>
          </div>
          <h2 className="text-underline">ADRESSE</h2>
          <div className="mt-3 font-s">
            <p>
              <b>CITE :</b> <span>{city}</span>
            </p>
            <p>
              <b>STREET :</b> <span className="">{street}</span>
            </p>
            <p>
              <b>SUITE :</b> <span className="">{suite}</span>
            </p>
            <p>
              <b>ZIPCODE :</b> <span className="">{zipcode}</span>
            </p>
          </div>
          <h2 className="text-underline">COMPANNIE</h2>
          <div className="mt-3 font-s">
            <p>
              <b>BS :</b> <span>{bs}</span>
            </p>
            <p>
              <b>CATCH_PHRASE :</b> <span className="">{catchPhrase}</span>
            </p>
            <p>
              <b>NAME :</b> <span className="">{company_name}</span>
            </p>
          </div>
        </div>
        <div className="col-md-1 offset-md-10 mt-5">
          <button className="btn btn-danger  btn-lg" onClick={handleClickClose}>
            Ferrmer
          </button>
        </div>
      </div>
    </div>
  );
};

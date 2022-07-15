function Contacts({ postData }) {
    return (
      <>
        <div className="record_display">
          <h2>Contactos Disponibles: </h2>
          <div className="record_container">
            {postData.map(({ nombre, apellido, telefono }, index) => (
              <div className="record_item" key={index}>
                <div className="record_el">
                  <span id="labelling">Nombre: </span>
                  <span id="Contact_id_content">{nombre}</span>
                </div>
                <div className="record_el">
                  <span id="labelling">Apellido: </span>
                  <span id="Contact_id_content">{apellido}</span>
                </div>
                <div className="record_el">
                  <span id="labelling">Telefono: </span>
                  <span id="Contact_id_content">{telefono}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default Contacts;
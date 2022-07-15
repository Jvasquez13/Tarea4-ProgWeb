function Form({ handleSubmit, handleChange, data:{nombre, apellido, telefono} }) {
    return (
      <>
        <div className="record_input">
          <h2>Agregar contactos</h2>
          <div className="entry_form">
            <form onSubmit={handleSubmit}>
              <label>Nombre</label>
              <input
                type="text"
                id="name"
                value={nombre}
                onChange={handleChange}
                name="nombre"
              />
              <label>Apellido</label>
              <input
                type="text"
                id="last_name"
                value={apellido}
                onChange={handleChange}
                name="apellido"
              />
              <label>Telefono</label>
              <input
                type="text"
                id="contact_number"
                value={telefono}
                onChange={handleChange}
                name="telefono"
              />
              <span className="message"></span>
              <div className="input_btns">
                <button type="submit" id="submit_btn">
                  <span>
                    <i className="fa fa-plus"></i>
                  </span>
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Form;
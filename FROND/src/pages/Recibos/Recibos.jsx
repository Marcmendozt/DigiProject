import React, { useState,useEffect  } from 'react';
import './Recibos.css';
import Select from 'react-select';
import generatePDF from './pdfGenerator';


function ReceiptForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [documentType] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [monedasTypes, setMonedas] = useState([]);
  const [selectedMoneda, setSelectedMoneda] = useState(null);
  const [documentNumber, setDocumentNumber] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [filenameLogo, setFilenameLogo] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Amount:', amount);
    console.log('Address:', address);
    console.log('Full Name:', fullName);
    console.log('Document Type:', selectedOption ? selectedOption.value : null);
    console.log('Document Number:', selectedMoneda ? selectedMoneda.value : null);
  };

  const handleDocumentTypeChange = (selectedOption) => {
    setSelectedOption(selectedOption);

  };

  
//CAMBIOS
  const handleMonedaChange = (selectedMoneda) => {
    setSelectedMoneda(selectedMoneda);
   
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    setFilenameLogo(fileName);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };




  const handleAgregarRecibo = () => {
    // Crear un objeto con los datos del registro
    const nuevoRegistro = {
      nombres: fullName,
      idTipoDocumento: selectedOption ? selectedOption.value : null,
      idMoneda: selectedMoneda ? selectedMoneda.value : null,
      titulo: title,
      descripcion: description,
      monto: amount,
      logo: filenameLogo,
      rutaLogo: "C:RutaLogo",
      pdfgenerado: true,
    };
    generatePDF(title, description,fullName,amount);
    const jsonString = JSON.stringify(nuevoRegistro);

    fetch('http://localhost:5217/api/FL/agregar-recibo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonString
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al agregar el registro');
        }
        return response.json();
      })
      .then(data => {
        console.log('Registro agregado:', data);
      
        alert('Registro agregado correctamente');
      })
      .catch(error => {
        console.error('Error al agregar el registro:', error);
      });
  };
  


  useEffect(() => {
 
    fetch('http://localhost:5217/api/FL/tipo-documento')
      .then(response => response.json())
      .then(data => setDocumentTypes(data))
      .catch(error => console.log(error));
  
   
    fetch('http://localhost:5217/api/FL/moneda')
      .then(response => response.json())
      .then(data => {
   
        setMonedas(data);
      })
      .catch(error => console.log(error));
  }, []);
  
 
  return (
    <div className="container">
      <h2>Crear Recibo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombres Completos:</label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
               required
          />
        </div>

        
        <div className="row">
  <div className="col">
    <label htmlFor="documentType" className="form-label">Tipo de Documento:</label>
    <Select
      id="documentType"
      value={selectedOption}
      onChange={handleDocumentTypeChange}
      options={documentTypes.map(document => ({
        value: document.idTipoDocumento,
        label: document.descripcion
      }))}
      placeholder="Selecciona un tipo de documento"
      className="custom-select" 
    />
  </div>
  <div className="col">
    <label htmlFor="documentNumber" className="form-label">Número de Documento:</label>
    <input
      type="text"
      id="documentNumber"
      className="form-control small-textbox"
      value={documentNumber}
      onChange={(e) => setDocumentNumber(e.target.value)}
    />
  </div>
</div>
<br />
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección:</label>
          <input
            type="text"
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
 
<br />
<div className="mb-3">
  <label htmlFor="moneda" className="form-label">Moneda:</label>
  <Select
    id="idMoneda"
    value={selectedMoneda}
    onChange={handleMonedaChange}
    options={monedasTypes.map(moneda => ({
      value: moneda.idMoneda,
      label: moneda.descripcion
    }))}
    placeholder="Selecciona una moneda"
  />
</div>

    <div className="mb-3">
          <label htmlFor="amount" className="form-label">Monto:</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="imageFile">Selecciona una imagen:</label>
        <br />
        <input type="file" id="imageFile" accept="image/*" onChange={handleImageChange} />
      </div>
      <br />
      {imagePreview && (
        <div>
          <h3>Vista previa:</h3>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
      )}
        <button type="submit" onClick={handleAgregarRecibo} className="btn btn-primary">Guardar</button>
      </form>
    </div>
   );
}
  export default ReceiptForm;




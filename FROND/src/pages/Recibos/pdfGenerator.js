import jsPDF from 'jspdf';

const generatePDF = (title, content,fullname,amount) => {
  const doc = new jsPDF();

  doc.text('Título: ' + title, 10, 10);
  doc.text('Contenido: ' + content, 10, 20);
  doc.text('Nombres: ' + fullname, 10, 30);
  doc.text('Monto: ' + amount, 10, 40);
  doc.save('formulario.pdf');
};

export default generatePDF;

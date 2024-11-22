import PillButton from "../buttons/PillButton";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import TextArea from "./TextArea";
import * as Yup from "yup";

function htmlFormContact() {
  //VALIDACIONES:
  const validar= Yup.object({
    name: Yup.string()
    .max(30,"Su nombre debe tener menos de 30 caracteres")
    .required("El nombre es necesario"),
    email: Yup.string()
    .email("Correo inválido")
    .required("Es necesario escribir el correo"),
    message: Yup.string()
    .min(20,"Su mensaje debe tener al menos 20 caracteres")
    .required("Escriba un mensaje")
  })



  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validar}
        className="max-w-sm mx-auto z-0"
      >
        {(formik) => (
          <>
            <Form>
              <TextField
                label="Escribe tu Nombre"
                id="name"
                name="name"
                placeh=""
                type="text"
              />
              <TextField
                label="Escribe tu correo"
                id="email"
                name="email"
                placeh="ejemplo@gmail.com"
                type="email"
                icon={
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                }
              />
              <TextArea
                label="Escribe tu Mensaje"
                id="message"
                name="message"
              />
              <PillButton className="bg-Btn-Agregar hover:bg-pink-900" type="sublit">
                Enviar
              </PillButton>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}

export default htmlFormContact;

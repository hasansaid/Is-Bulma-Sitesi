import React from 'react'
import './styles.css'
import { Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import { signup } from '../../common'

const Signup = () => {
  let history = useHistory()

  return (
    <div>
      <h1
        style={{ textAlign: 'center', fontSize: '3em', marginBottom: '30px' }}
      >
        Kayıt Ol
      </h1>

      <Formik
        initialValues={{ fullname: '', position: '', email: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = '* Zorunlu alan'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = '* Geçersiz email'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)

          let result = await signup({
            FullName: values.fullname,
            Position: values.position,
            Email: values.email,
            Password: values.password,
          })
          if (result === 200) {
            history.push('/login')
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="formik-form-test">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <span>
                İsim Soyisim{' '}
                <span style={{ color: 'red' }}>
                  {errors.fullname && touched.fullname && errors.fullname}
                </span>
              </span>

              <input
                type="fullname"
                name="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                style={{
                  border: '1px solid black',
                  marginTop: '5px',
                  borderRadius: '10px',
                  paddingLeft: '3px',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <span>
                Pozisyon{' '}
                <span style={{ color: 'red' }}>
                  {errors.position && touched.position && errors.position}
                </span>
              </span>

              <input
                type="position"
                name="position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
                style={{
                  border: '1px solid black',
                  marginTop: '5px',
                  borderRadius: '10px',
                  paddingLeft: '3px',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <span>
                Email{' '}
                <span style={{ color: 'red' }}>
                  {errors.email && touched.email && errors.email}
                </span>
              </span>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                style={{
                  border: '1px solid black',
                  marginTop: '5px',
                  borderRadius: '10px',
                  paddingLeft: '3px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <span>
                Şifre{' '}
                <span style={{ color: 'red' }}>
                  {errors.password && touched.password && errors.password}
                </span>
              </span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                style={{
                  border: '1px solid black',
                  marginTop: '5px',
                  borderRadius: '10px',
                  paddingLeft: '3px',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                border: '1px solid black',
                width: 'fit-content',
                margin: '20px',
                padding: '5px',
                borderRadius: '10px',
              }}
            >
              Kayıt Ol
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Signup

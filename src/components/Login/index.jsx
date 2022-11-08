import React from 'react'
import './styles.css'
import { Formik } from 'formik'
import { useHistory } from 'react-router-dom'

const Login = ({ changeUserActive }) => {
  let history = useHistory()

  return (
    <div>
      <h1
        style={{ textAlign: 'center', fontSize: '3em', marginBottom: '30px' }}
      >
        Giriş Yap
      </h1>

      <Formik
        initialValues={{ email: '', password: '' }}
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            changeUserActive()

            history.push('/applied')
            setSubmitting(false)
          }, 400)
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
              <span>Şifre</span>
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
            {errors.password && touched.password && errors.password}
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
              Giriş Yap
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login

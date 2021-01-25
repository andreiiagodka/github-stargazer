import React from 'react'

import { Container, Col, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { getRepositoryData } from '../../../shared/github'
import { createRepository } from '../../../shared/firebase'

const Body = props => {
  const initialValues = { name: '' }
  const validationSchema = Yup.object({
    name: Yup.string().required('Required')
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true)
      getRepositoryData(values.name)
        .then(response => {
          const [ repository, languages ] = response

          createRepository(repository.data, languages.data)
          props.history.push('/')
        })
        .catch(() => {
          setFieldError('name', 'Repository not found')
        })
      setSubmitting(false)
    }
  })

  return (
    <Container fluid>
      <Col md={{ span: 8, offset: 2 }}>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              id='name'
              name='name'
              placeholder='Enter repository name, e.g. rubygarage/truemail'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            { formik.touched.name && formik.errors.name ? (<Form.Text className="text-danger">{formik.errors.name}</Form.Text>) : null }
          </Form.Group>
          <Button type='submit' variant='primary' size='lg' block>
            Add
          </Button>
        </Form>
      </Col>
    </Container>
  )
}

export default Body
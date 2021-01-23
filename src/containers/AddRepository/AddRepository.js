import React, { Component, Fragment } from 'react'
import {
  Card,
  Container,
  Col,
  Form,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router'
import { Formik } from 'formik'
import * as Yup from 'yup'

import axios from 'axios'
import { createRepository } from '../../firebase/firebase'

import Header from '../../components/UI/Header/Header'

class AddRepository extends Component {
  render() {
    const initialValues = { name: '' }
    const validationSchema = Yup.object({
      name: Yup.string().required('Required')
    })

    let form = (
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true)
          axios.get('https://api.github.com/repos/' + values.name)
            .then(response => {
              createRepository(response.data)
              this.props.history.push('/')
            })
            .catch(() => {
              setFieldError('name', 'Repository not found')
            })
          setSubmitting(false)
        }}
      >
      {formik => (
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
      </Formik>
    )

    const content = (
      <Fragment>
        <Card.Header>
          <Header title='Add Repository' />
        </Card.Header>
        <Card.Body>
          {form}
        </Card.Body>
      </Fragment>
    )
    
    return content
  }
}

export default withRouter(AddRepository)
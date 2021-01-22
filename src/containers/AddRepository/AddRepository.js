import React, { Component, Fragment } from 'react'
import {
  Card,
  Container,
  Col,
  Form,
  Button
} from 'react-bootstrap'
import { Redirect} from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner';
import Header from '../../components/UI/Header/Header'
// import Form from '../../components/AddRepository/Form/Form'

class createRepository extends Component {
  test = name => {
    this.props.createRepository(name)
  }

  render() {
    const initialValues = { name: '' }
    const validationSchema = Yup.object({
      name: Yup.string().required('Required')
    })

    let form = (
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
          setSubmitting(true)
          this.props.createRepository(values.name)
          setTimeout(() => {
            if (this.props.error) {
              setFieldError('name', this.props.error)
            } else {
              resetForm()
            }
          }, 500)
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
    let content = <Spinner />
    if (!this.props.loading) {
      content = (
        <Fragment>
          <Card.Header>
            <Header title='Add Repository' />
          </Card.Header>
          <Card.Body>
            {form}
          </Card.Body>
        </Fragment>
      )
    }

    return content
  }
}

const mapStateToProps = state => {
  return {
    loading: state.createRepository.loading,
    error: state.createRepository.error,
    redirectTo: state.createRepository.redirectTo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRepository: (name) => dispatch(actions.createRepository(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(createRepository)
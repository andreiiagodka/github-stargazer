import React from 'react'

import { Form, Field, ErrorMessage } from 'formik'
import { FormGroup, FormText, Button } from 'react-bootstrap'

const AddRepositoryFormComponent = () => (
  <Form>
    <FormGroup>
      <Field 
        type='name' 
        name='name' 
        placeholder='Enter repository name, e.g. rubygarage/truemail' 
        className={'form-control'} />
    </FormGroup>
    <FormText className="text-danger">
      <ErrorMessage name='name' />
    </FormText>
    <Button type='submit' variant='primary' size='lg' block>
      Add
    </Button>
  </Form>
)

export default AddRepositoryFormComponent

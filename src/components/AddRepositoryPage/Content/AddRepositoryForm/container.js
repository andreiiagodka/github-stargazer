import { withFormik } from 'formik'
import * as Yup from 'yup'

import AddRepositoryFormComponent from './component'

import { getRepositoryData } from '../../../../shared/github'
import { createRepository } from '../../../../shared/firebase'

const validationSchema = Yup.object({
  name: Yup.string().required('Required')
})

const AddRepositoryFormContainer = withFormik({
  mapPropsToValues: () => ({ name: '' }),
  validationSchema,

  handleSubmit: (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true)
    getRepositoryData(values.name)
      .then(response => {
        const [ repository, languages ] = response

        createRepository(repository.data, languages.data)
        // history.push('/')
      })
      .catch(() => {
        setFieldError('name', 'Repository not found')
      })
    setSubmitting(false)
  },

  displayName: 'AddRepositoryFormContainer'
})(AddRepositoryFormComponent)

export default AddRepositoryFormContainer

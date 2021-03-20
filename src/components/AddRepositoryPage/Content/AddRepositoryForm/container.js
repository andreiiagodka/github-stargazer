import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import AddRepositoryFormComponent from './component'

import * as actions from '../../../../store/actions'

const validationSchema = Yup.object({
  name: Yup.string().required('Required')
})

const AddRepositoryFormContainer = withFormik({
  mapPropsToValues: () => ({ name: '' }),
  validationSchema,

  handleSubmit: (values, { props, setSubmitting, setFieldError }) => {
    const payload = {
      name: values.name,
      history: props.history,
      setSubmitting,
      setFieldError
    }

    props.createRepository(payload)
  },

  displayName: 'AddRepositoryFormContainer'
})(AddRepositoryFormComponent)

const mapDispatchToProps = dispatch => ({
  createRepository: payload => dispatch(actions.createRepository(payload)),
})

export default connect(null, mapDispatchToProps)(withRouter(AddRepositoryFormContainer))

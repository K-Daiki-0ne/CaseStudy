export const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    width: '25%',
    margin: theme.spacing(2)
  },
  text: {
    textAlign: 'center',
    fontFamily: 'system-ui',
    fontWeight: 800,
    fontSize: 30,
    color: '#444444'
  }
})
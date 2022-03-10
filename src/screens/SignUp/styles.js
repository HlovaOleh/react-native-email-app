import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: 0.1,
  },
  screenContent: {
    width: '100%',
  },
  titleContainer: {},
  policyText: {
    fontSize: 12,
    lineHeight: 14,
    color: '#fff',
    opacity: 0.5,
    letterSpacing: 0.1,
  },
  policyWrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
  fieldsContainer: {
    marginTop: 40,
    marginBottom: 10,
  },
  textInputContainer: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#1F1F1F',
    color: '#fff',
  },
  btn: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#0063FF',
    borderRadius: 32,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#fff',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCheck: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'red',
  },
  message: {
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 12,
    lineHeight: 14,
    color: '#DE494A',
    fontWeight: '500',
    marginTop: 3,
  },
});

import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import {TextInput} from 'react-native-paper';
import TickIcon from '../../assets/images/svgs/TickIcon';

import {styles} from './styles';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    checkBox: false,
  });

  const isDisabled =
    email == '' ||
    username == '' ||
    username.length < 3 ||
    email.length < 10 ||
    errors.email ||
    errors.username ||
    errors.checkBox ||
    !checked;

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [phoneData, setPhoneData] = useState([]);

  const phoneInput = useRef(null);
  const isEmailValid = userEmail => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(String(userEmail).toLowerCase());
  };

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json',
    )
      .then(res => res.json())
      .then(data => setPhoneData(data));
  }, []);

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.screenContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Создать аккаунт</Text>
        </View>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.textInputContainer}
            mode="outlined"
            outlineColor={errors.username ? '#DE494A' : '#8F8F8F'}
            activeOutlineColor={errors.username ? '#DE494A' : '#0063FF'}
            selectionColor={'white'}
            maxLength={10}
            onChangeText={e => {
              let value = e;
              value = value.replace(/[^А-Яа-я]/gi, '');
              setUsername(value);
              value.length >= 3 && setErrors({...errors, username: ''});
            }}
            value={username}
            theme={{
              colors: {
                text: errors.username ? '#DE494A' : '#fff',
                placeholder: errors.username ? '#DE494A' : '#8F8F8F',
              },
            }}
            label={'Имя'}
            onBlur={() =>
              (!username || username.length < 3) &&
              setErrors(prevErrors => ({
                ...prevErrors,
                username: 'Введите нормальное имя',
              }))
            }
          />
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}
          <View style={{marginTop: 15}}>
            <TextInput
              style={styles.textInputContainer}
              mode="outlined"
              outlineColor={errors.email ? '#DE494A' : '#8F8F8F'}
              activeOutlineColor={errors.email ? '#DE494A' : '#0063FF'}
              selectionColor={'white'}
              maxLength={30}
              onChangeText={val => {
                setEmail(val);
                isEmailValid(val)
                  ? setErrors(prevErrors => ({...prevErrors, email: ''}))
                  : setErrors(prevErrors => ({
                      ...prevErrors,
                      email: 'Введите корректный емэйл',
                    }));
              }}
              value={email}
              theme={{
                colors: {
                  text: errors.email ? '#DE494A' : '#fff',
                  placeholder: errors.email ? '#DE494A' : '#8F8F8F',
                },
              }}
              label={'E-mail'}
              onBlur={() =>
                (!email || !isEmailValid(email)) &&
                setErrors({...errors, email: 'Введите корректный емэйл'})
              }
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={{marginTop: 15}}>
            <View
              style={{
                backgroundColor: 'red',
                height: 50,
                width: '100%',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{backgroundColor: '#fff', width: 80, height: '100%'}}>
                <View>
                  <Text></Text>
                  {/* ІКОНКА БІЛЯ ЦИФР */}
                </View>
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1,
                  height: '100%',
                  backgroundColor: 'green',
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.btn,
            isDisabled && {backgroundColor: isDisabled ? '#8F8F8F' : '#0063FF'},
          ]}
          disabled={isDisabled}
          onPress={() => {
            if (isDisabled) {
              Alert.alert("You didn't enter any email or password!");
            } else {
              isEmailValid(email)
                ? Alert.alert('Sucess')
                : Alert.alert('Email is not valid');
            }
          }}>
          <Text style={styles.btnText}>Далее</Text>
        </TouchableOpacity>
        <View style={styles.policyWrapper}>
          <TouchableWithoutFeedback
            onPress={() => setChecked(checked => !checked)}>
            <View style={styles.checkBox}>{checked ? <TickIcon /> : null}</View>
          </TouchableWithoutFeedback>
          <View style={{flex: 1, marginLeft: 15}}>
            <Text style={styles.policyText}>
              Регистрируясь, вы соглашаетесь с нашими{' '}
              <Text style={{textDecorationLine: true}}>
                Условиями использования
              </Text>{' '}
              и{' '}
              <Text style={{textDecorationLine: true}}>
                Политикой конфиденциальности
              </Text>
            </Text>
          </View>
        </View>
        <PhoneInput
          defaultValue={value}
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          ref={phoneInput}
          layout="second"
          withDarkTheme
          withShadow
          autoFocus
        />
        {showMessage && (
          <View style={styles.message}>
            <Text>Value : {value}</Text>
            <Text>Formatted Value : {formattedValue}</Text>
            <Text>Valid : {valid ? 'true' : 'false'}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.buttonCheck}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}>
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

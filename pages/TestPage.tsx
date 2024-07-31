import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { testAPI } from '../services/Api';

const TestPage: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await testAPI();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error al conectar con la API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Test Page</Text>
      {message ? <Text>{message}</Text> : <Text>No message</Text>}
    </View>
  );
};

export default TestPage;

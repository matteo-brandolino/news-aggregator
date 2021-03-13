import { useState, useEffect } from 'react'
import axios from 'axios'

const useLang = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await axios(url, options);
          setResponse(res);
          setIsLoading(false)
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
      // eslint-disable-next-line 
    }, []);

    return { response, error, isLoading };
};

export default useLang
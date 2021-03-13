import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url, options, country) => {
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
      country && fetchData();
      // eslint-disable-next-line 
    }, [country]);

    return { response, error, isLoading };
};

export default useAxios
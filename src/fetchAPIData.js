const [data, setData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

async function getFetchData() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(jsonData => setData(jsonData));
}

useEffect(() => {
  getFetchData();
}, []);

useEffect(() => {
  if (data.length > 0) {
    setIsLoaded(true);
  }
  console.log('ended');
}, [data]);

console.log(data);

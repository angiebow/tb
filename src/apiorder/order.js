import axios from "axios";
import API_BASE_URL from './const';

const orderPost = async(args) => {
  axios.post(API_BASE_URL + '/order', {
    user_id: args.user_id,
    bengkel_id: args.bengkel_id,
    location: args.location,
    customer_latitude: args.customer_latitude,
    customer_longitude: args.customer_longitude,
    category: args.category,
    tipe_kendaraan: args.tipe_kendaraan,
    nomor_polisi: args.nomor_polisi,
    kondisi: args.kondisi,
    keterangan: args.keterangan,
    ban_bocor: args.ban_bocor
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default orderPost;
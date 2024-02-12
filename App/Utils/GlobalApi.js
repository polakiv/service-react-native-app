import { request, gql } from 'graphql-request'
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cls5om4110bvn01w3arpav8fq/master";

const getSlider = async () => {
  const query = gql`
query GetSlider {
    sliders1 {
      id
      name
      image {
        url
      }
    }
  } 
`
  const result = await request(MASTER_URL, query);
  return result
}

const getCategories = async () => {
  const query = gql`
    query GetCategory {
        categories {
          id
          name
          icon2 {
            url
            width
            size
          }
        }
      }    
    `
  const result = await request(MASTER_URL, query);
  return result
}
const getBusinessLists = async () => {
  const query = gql`
    query GetBusinessList {
        bussinessLists {
          id
          name
          email
          contactPerson
          address
          about
          category {
            name
          }
          images {
            url
          }
        }
      }  
    `
  const result = await request(MASTER_URL, query);
  return result
}
const getCategoryProduct = async (category) => {
  const query = gql`
  query GetBusinessListsByCategory {
    bussinessLists(where: {category: {name: "`+ category + `"}}) {
      about
      address
      name
      id
      contactPerson
      category {
        name
      }
      images {
        url
      }
    }
  } 
  `
  const result = await request(MASTER_URL, query);
  return result
}
const createBooking = async (data) => {
  const mutationquery = gql`
  mutation CreateBooking {
    createBooking(
      data: {
        bookingStatus: Booked, 
        bussinessList: {
          connect: {
            id: "`+ data.businessId + `"
          }}, 
          date: "`+ data.date + `", 
          time: "`+ data.time + `", 
          userName: "`+ data.userEmail + `", 
          email: "`+ data.userName + `"}
    ) {
      id
    }
  publishManyBookings(to: PUBLISHED) {
      count
    }
  }  
  `
  const result = await request(MASTER_URL, mutationquery);
  return result
}


export default {
  getSlider,
  getCategories,
  getBusinessLists,
  getCategoryProduct,
  createBooking
}
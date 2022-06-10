import { Then } from "@cucumber/cucumber";
import SearchHotels from '../pageobjects/searchHotel.page'


Then(/^I select location (.*)$/, async (location) => {
    await SearchHotels.selectLocation(location);
});
Then(/^I select hotel (.*)$/, async (hotel) => {
    await SearchHotels.selectHotels(hotel);
});
Then(/^I select room type (.*)$/, async (roomtype) => {
    await SearchHotels.selectRoomtype(roomtype);
});
Then(/^I select number of rooms (.*)$/, async (numberofrooms) => {
    await SearchHotels.selectNumberOfRooms(numberofrooms);
});
Then(/^I select check in date (.*)$/, async (checkindate) => {
    await SearchHotels.getDate(checkindate);
});
Then(/^I select check out date (.*)$/, async (checkoutdate) => {
    await SearchHotels.getDate(checkoutdate);
});
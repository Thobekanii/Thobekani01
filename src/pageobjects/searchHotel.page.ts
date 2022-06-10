class SearchHotel {

    locationList = $('#location');
    hotelsList = $('#hotels');
    roomTypes = $('#room_type');
    numberOfRooms = $('#room_nos');
    checkInDate = $('#datepick_in');
    checkOutDate = $('#datepick_out');
    adultPerRoom = $('#adult_room');
    childrenPerRoom = $('#child_room');

    searchButtom = $('#Submit');
    resetButton = $('#Reset');

    public async clickSearchButton() {
        await (await this.searchButtom).click();
    }
    public async clickResetButton() {
        await (await this.resetButton).click();
    }
    public async selectLocation(location: string) {
        await this.locationList.selectByVisibleText(location);
    }

    public async selectHotels(hotel: string) {
        await this.hotelsList.selectByVisibleText(hotel);
    }
    public async selectRoomtype(roomtype: string) {
        await this.roomTypes.selectByVisibleText(roomtype);
    }

    public async selectNumberOfRooms(numberofrooms: string) {
        await this.numberOfRooms.selectByAttribute('value', numberofrooms);
    }

    public async selectAdultsPerRoom(adultsperroom: string) {
        await this.numberOfRooms.selectByVisibleText(adultsperroom);
    }

    public async selectChildrenPerRoom(childrenperperson: string) {
        await this.numberOfRooms.selectByVisibleText(childrenperperson);
    }

    public async getDate(day: number) {
        const now = new Date();
        now.setDate(now.getDate() + 7);
        console.log("Ivelile ", now.toLocaleDateString());
    }
}
export default new SearchHotel();
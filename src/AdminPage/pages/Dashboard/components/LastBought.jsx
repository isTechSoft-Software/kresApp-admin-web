
function LastBought({ element }) {

    const date = new Date(element.createdAt);

    const formattedDate = `${date.getUTCDate().toString().padStart(2, '0')}.${(date.getUTCMonth() + 1).toString().padStart(2, '0')}.${date.getUTCFullYear()}`;

    return (

        <div key={element.id} className="kisi mb-3 d-flex justify-content-between align-items-center px-4 overflow-auto ">
            <div className="mg">
                {element.School.schoolName}
            </div>
            <div className="mg">
                {element.School.Packet.packetName}
            </div>
            <div>
                {formattedDate}
            </div>

        </div>
    );
}

export default LastBought;
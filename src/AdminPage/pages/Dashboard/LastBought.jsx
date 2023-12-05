function LastBought({element}) {
    return (

        <div key={element.id} className="kisi mb-3 d-flex justify-content-between align-items-center px-4 overflow-auto ">
            <div className="mg">
                {element.name} {element.surname}
            </div>
            <div className="mg">
                {element.phone}
            </div>
            <div>
                {element.email}
            </div>

        </div>
    );
}

export default LastBought;
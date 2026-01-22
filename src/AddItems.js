import { FaPlus } from "react-icons/fa"
function AddItems({ puthusu, setPuthusu, sub }) {

    return (
        <>
            <form className="addForm" onSubmit={sub}>
                <label htmlFor="addItem">Add item</label>
                <input
                    type="text"
                    required
                    autoFocus
                    id="addItem"
                    value={puthusu}
                    onChange={(e) => setPuthusu(e.target.value)}
                />

                <button type="submit"><FaPlus /></button>

            </form>
        </>
    )
}

export default AddItems
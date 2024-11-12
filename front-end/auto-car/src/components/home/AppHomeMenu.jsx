import React from 'react'

const AppHomeMenu = (props) => {

    const {handleTab, selectedTab, setSelectedTab} = props;

    return (
        <div className='relative p-10 pt-16 h-[150px]'>
            <div className='flex space-x-16 border-b-2 border-black border-opacity-20 text-[20px] text-black text-opacity-70 py-2'>
                <button onClick={() => handleTab('popular')} 
                    className={selectedTab === 'popular' ? 'text-black font-semibold':'hover:text-black' }>
                    Poppular New Car
                </button>
                <button onClick={() => handleTab('all-car')}
                    className={selectedTab === 'all-car' ? 'text-black font-semibold':'hover:text-black' }>
                    All cars
                </button>
                <button onClick={() => handleTab('pickup-truck')}
                    className={selectedTab === 'pickup-truck' ? 'text-black font-semibold':'hover:text-black' }>
                    Pickup truck
                </button>
                <button onClick={() => handleTab('hatch-back')}
                    className={selectedTab === 'hatch-back' ? 'text-black font-semibold':'hover:text-black' }>
                    Hatchback
                </button>
                <button onClick={() => handleTab('van')}
                    className={selectedTab === 'van' ? 'text-black font-semibold':'hover:text-black' }>
                    Van
                </button>
            </div>
        </div>
    )
}

export default AppHomeMenu;
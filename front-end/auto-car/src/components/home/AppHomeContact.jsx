import React from 'react'

const AppHomeContact = () => {
    return (
        <div className='main flex justify-between items-center h-[370px] w-full'>
            <div className='text-white h-full flex flex-col items-center justify-center w-1/2'>
                <div className='text-left'>
                    <h4 className='font-bold text-[30px]'>SC AUTO HATYAI</h4>
                    <p className='text-sky-1 text-[20px]'>SC AUTO HATYAI is Southeast Asia’s largest <br />
                        integrated car e-commerce platform, with <br />
                        presence in  Thailand</p>
                </div>
            </div>
            <div className='text-white h-full flex items-center justify-start px-10 w-1/2'>
                <div className='text-left'>
                    <h4 className='text-[22px] text-sky-1'>Subscribe to Our Newsletter</h4>
                    <p className='text-[17px]'>Get the latest discounts, promotions & exclusive benefits delivered straight to your inbo</p>
                    <div className='flex flex-col text-[17px] pt-6 space-y-2'>
                        <div className='flex flex-row justify-start items-center space-x-4'>
                            <a href="https://www.facebook.com/scautohatyai">
                                <img src="/images/facebook-icon.png" alt="Facebook" className='w-10' />
                            </a>
                            <span>SC AUTO Hatyai, second-hand cars, Hat Yai - main page</span>
                        </div>
                        <div className='flex flex-row justify-start items-center space-x-4'>
                            <img src="/images/phone-icon.png" alt="Facebook" className='w-10' />
                            <span>If interested, contact 082-9844008.</span>
                        </div>
                        <div className='flex flex-row justify-start items-center space-x-4'>
                            <img src="/images/line-icon.png" alt="Facebook" className='w-10' />
                            <span>ID Line : @scautohatyai</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHomeContact;
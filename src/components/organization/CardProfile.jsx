import React from 'react';

const CardProfile = ({ profile }) => {
    return (
        <div

            className="w-full hover:scale-x-110"
        >
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 border-t-8 border-gray">
                <div className="">
                    <img
                        className="w-32 mx-auto shadow-xl rounded-full"
                        src={profile.photo}
                        alt="Profile face"
                    />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {profile.name} {' '} {profile.lastName}
                    </p>
                    <p className="text-xs sm:text-base text-gray-800 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        {profile.position}
                    </p>
                    <div className="flex align-center justify-center mt-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProfile
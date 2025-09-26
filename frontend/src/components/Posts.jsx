import React from 'react'

const Posts = () => {
  return (
    <div className="w-[600px] bg-white shadow-2xl p-4 border border-slate-200 rounded-[5px]">
      <div>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-20 h-20 rounded-full bg-slate-400 flex justify-center items-center outline-2 outline-slate-400">
              <img className="w-full" src="" alt="postImg" />
            </div>
            <div>
              <p>headline</p>
              <p>2,260 followers</p>
              <p>2d</p>
            </div>
          </div>
          <button>+Follow</button>
        </div>
        <p>
          🚀 Your Industry. Your Data. Your Advantage. From manufacturing to finance and retail,
          enterprises face one challenge: making data work for growth. 📊 The FanRuan BI Business
          Scenario White Paper explores how enterprises can turn these challenges into opportunities
          with scenario-based solutions: ✔️ Smart manufacturing with lean control centers and supply
          chain visibility ✔️ Retail growth powered by e-commerce and store management analytics ✔️
          Digital banking and insurance transformation ✔️ Smart campuses, grids, and transportation
          in the public sector ✔️ Healthcare optimization through digital hospitals and pharma
          platforms 📥 Download the White Paper today and see how scenario-driven BI can transform
          your industry.
        </p>
        <div className="border-t border-slate-200 p-3 mt-4">
          <div className="flex justify-between items-center py-2">
            <p>liked</p>
            <p>comment</p>
          </div>
          <div className="flex justify-around items-center gap-4 border-t border-slate-200">
            <p>like</p>
            <p>comment</p>
            <p>report</p>
            <p>send</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts

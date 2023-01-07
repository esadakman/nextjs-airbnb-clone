function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Community</h5>
        <p>Accesibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Youtube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
}

export default Footer;

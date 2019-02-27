
Country.findAll({});

Country.findOne({
    where: {
        country: "usa",
        independenceYear: 1776
    }
});

Country.update({ country: 'US' }, { where: { independenceYear: 1776 } })
.then((result) => {
    console.log(result);
});
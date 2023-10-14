import {Web5} from "@web5/api";
const { web5, did: aliceDid } = await Web5.connect();

// console.log(aliceDid);

// Write DWN Record
const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
        dataFormat: 'text/plain',
    },
});

// console.log('writeResult', record);

// Read DWN Record
const readResult = await record.data.text();

// console.log('readResult', readResult);

// Update DWn Record
const updateResult = await record.update({
    data: 'Hello, Web5! Updated',
});

// console.log('updateResult', await record.data.text());

// Delete DWN Record
const deleteResult = await record.delete();

console.log('deleteResult', deleteResult);


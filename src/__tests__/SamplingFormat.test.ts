import { SamplingFormat } from "../SamplingFormat";

describe("SamplingFormat", () => {
    test("Test int 8bit", () => {
        const sf = SamplingFormat.Int8Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(1);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("int");
    });

    test("Test int 16bit", () => {
        const sf = SamplingFormat.Int16Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(2);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("int");
    });

    test("Test int 32bit", () => {
        const sf = SamplingFormat.Int32Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(4);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("int");
    });

    test("Test int 64bit", () => {
        const sf = SamplingFormat.Int64Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(8);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("int");
    });

    test("Test float 8bit", () => {
        const sf = SamplingFormat.Float8Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(1);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("float");
    });

    test("Test float 16bit", () => {
        const sf = SamplingFormat.Float16Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(2);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("float");
    });

    test("Test float 32bit", () => {
        const sf = SamplingFormat.Float32Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(4);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("float");
    });

    test("Test float 64bit", () => {
        const sf = SamplingFormat.Float64Bit;
        expect(SamplingFormat.samplingFormatToByteCount(sf)).toBe(8);
        expect(SamplingFormat.samplingFormatToNumberType(sf)).toBe("float");
    });

});

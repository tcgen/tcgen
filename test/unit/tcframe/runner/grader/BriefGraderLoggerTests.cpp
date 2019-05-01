#include "gmock/gmock.h"
#include "../../mock.hpp"

#include "../logger/MockLoggerEngine.hpp"
#include "tcframe/runner/grader/BriefGraderLogger.hpp"

using ::testing::InSequence;
using ::testing::Test;

namespace tcframe {

class BriefGraderLoggerTests : public Test {
protected:
    MOCK(LoggerEngine) engine;

    BriefGraderLogger logger = BriefGraderLogger(&engine);
};

TEST_F(BriefGraderLoggerTests, Result) {
    TestCaseVerdict verdict(Verdict::ac());
    EXPECT_CALL(engine, logParagraph(0, verdict.toBriefString()));
    logger.logResult({{Subtask::MAIN_ID, verdict}}, verdict);
}

TEST_F(BriefGraderLoggerTests, Result_WithSubtasks) {
    TestCaseVerdict verdict(Verdict::wa(), 70);
    TestCaseVerdict subtask1Verdict(Verdict::ac(), 70);
    TestCaseVerdict subtask2Verdict(Verdict::wa(), 0);
    {
        InSequence sequence;
        EXPECT_CALL(engine, logParagraph(0, verdict.toBriefString()));
        EXPECT_CALL(engine, logParagraph(0, subtask1Verdict.toBriefString()));
        EXPECT_CALL(engine, logParagraph(0, subtask2Verdict.toBriefString()));
    }
    logger.logResult({{1, subtask1Verdict}, {2, subtask2Verdict}}, verdict);
}

}
